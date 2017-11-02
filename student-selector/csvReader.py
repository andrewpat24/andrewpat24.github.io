import csv
import sys

with open("AP CSP Class Lists - 2nd Period.csv") as csvfile: 
	reader = csv.DictReader(csvfile)
	for line in reader:
		sys.stdout.write('"'+line['student']+'",')