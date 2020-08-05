import glob
import getopt
import os
import sys

print("Anti-CF hosts file generator v1.0")
print("Licensed under CC0 1.0")
print("")

#functions
def progress(value, filename):
    sys.stdout.write('\033[2K\033[1G') #wipe the line before printing
    sys.stdout.write("Compiling rules [%s] %s" % ("{:,}".format(value), filename))
    sys.stdout.flush()

opts, argv = getopt.getopt(sys.argv[1:], "o:d:")

def process(outputf, inputd):
    if not os.path.isdir(inputd):
        print("Input not directory");
        sys.exit(1)

    with open(outputf, 'a') as outfile:
        rulescom = 0 #counter for counting how much rules compiled

        files = glob.glob(os.path.join(inputd, "*.txt")) #filter out anything but txt files

        for f in files:
            with open(f) as ruleso:
                for line in ruleso:
                    outfile.write("0.0.0.0  {}\n".format(line.rstrip())) #this does the job
                    rulescom = rulescom + 1
                    progress(rulescom, f)

if len(sys.argv) < 5: #check if theres argv
    print("Usage: generate.py -o <output file> -d <input directory>")
    print("Example: generate.py -o filter.txt -d ../../cloudflare_users/domains/")
    sys.exit(1)

#argv parsing
for k, v in opts:
    if k == '-o':
        outputfile = v
    if k == '-d':
        inputdirectory = v

process(outputfile, inputdirectory)
