import csv
import sys

with open("Class Lists - Student Picker - 6th Period.csv") as csvfile: 
	reader = csv.DictReader(csvfile)
	for line in reader:
		sys.stdout.write('"'+line['student']+'",')