from datetime import datetime, timezone
import os
from pathlib import Path

from ...helpermodules import log
from ...helpermodules import pub

class set_values():
    def __init__(self) -> None:
        self.base_dir = Path(os.path.abspath(__file__)).parents[2]

    def set(self, num, values, ramdisk):
        """
        Parameter
        ---------
        values: [[voltage1, voltage2, voltage3],
                [current1, current2, current3],
                [power1, power2, power3],
                [power_factor1, power_factor2, power_factor3],
                power_all,
                frequency]
        """
        
        if ramdisk == True:
            self.write_to_ramdisk(values)
        else:
            self.pub_to_broker(num, values)

    def write_to_ramdisk(self, values):
        try:
            values[0] = [round(val, 1) for val in values[0]]
            self.write_to_file("/evuv1", values[0][0])
            self.write_to_file("/evuv2", values[0][1])
            self.write_to_file("/evuv3", values[0][2])
            values[1] = [round(val, 1) for val in values[1]]
            self.write_to_file("/bezuga1", values[1][0])
            self.write_to_file("/bezuga2", values[1][1])
            self.write_to_file("/bezuga3", values[1][2])
            values[2] = [int(val) for val in values[2]]
            self.write_to_file("/bezugw1", values[2][0])
            self.write_to_file("/bezugw2", values[2][1])
            self.write_to_file("/bezugw3", values[2][2])
            values[3] = [round(val, 2) for val in values[3]]
            self.write_to_file("/evupf1", values[3][0])
            self.write_to_file("/evupf2", values[3][1])
            self.write_to_file("/evupf3", values[3][2])
            self.write_to_file("/wattbezug", int(values[4]))
            self.write_to_file("/evuhz", round(values[5], 2))
            if int(os.environ.get('debug')) >= 1:
                log.log_1_9('EVU Watt: ' + str(int(values[4])))
        except Exception as e:
            log.exception_logging(e)

    def write_to_file(self, file, value):
        with open(file, "w") as f:
                f.write(self.base_dir + value)

    def pub_to_broker(self, num, values):
        try:
            # Format
            for n in range(len(values)):
                if isinstance(values[n], list) == True:
                    for m in range(len(values[n])):
                        values[n][m] = round(values[n][m], 2)
                else:
                    values[n] = round(values[n], 2)
            pub.pub("openWB/set/counter/"+str(num)+"/get/voltage", values[0])
            pub.pub("openWB/set/counter/"+str(num)+"/get/current", values[1])
            pub.pub("openWB/set/counter/"+str(num)+"/get/power_phase", values[2])
            pub.pub("openWB/set/counter/"+str(num)+"/get/power_factor", values[3])
            pub.pub("openWB/set/counter/"+str(num)+"/get/power_all", values[4])
            pub.pub("openWB/set/counter/"+str(num)+"/get/frequency", values[5])
        except Exception as e:
            log.exception_logging(e)