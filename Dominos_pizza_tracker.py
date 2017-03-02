import urllib
from bs4 import BeautifulSoup as BS
import prowlpy
import time

url = "https://order.dominos.com/orderstorage/GetTrackerData?Phone={}"
prowl_api = 'PROWL_KEY'

def get_numbers():
	phone_list = {}
	with open("/path/to/phone_numbers") as f:
		r = f.readlines()
		for line in r:
			phone_list[line.split(":")[0]] = int(line.split(":")[1])
	return phone_list

def order_id_exists(order_id):
	with open("/path/to/Order History", "r+") as f:
		r = f.readlines()
		var = list(filter(lambda x: order_id in x, r))
		f.close()
		if not var:
			return True
      
def store_order(order):
	with open("Order History", "a+") as f:
		f.write("\nName: {}\nNumber: {}\nDate: {}\nTime: {}\nOrder: {}\nMethod: {}\nOrder ID: {}\n\n".format(*order))
		f.close()

def parse_order(page):
	datetime = str(page.find('StartTime').text)
        date, time = datetime.split('T')[0], datetime.split('T')[1]
        method = str(page.find('ServiceMethod').text)
        description = str(page.find('OrderDescription').text)
        _id = str(page.find('OrderID').text)
	return [date, time, description, method, _id]

def has_order(status):
	return status != ""

def post_prowl(event=None, description=None):
	prowl = prowlpy.Prowl(prowl_api)
	prowl.post(application="Domino's Pizza Tracker", event=event, description=description)

def get_page(number):
	try:
		return BS(urllib.urlopen(url.format(str(number))), "xml")
	except:
		pass

def main():
	pizza = False
	post_prowl(event='Checking Orders...')
	phone_list = get_numbers()
	for name, number in phone_list.items():
		page = get_page(number)
		print("Checking {}, Number: {}\n".format(name, str(number)))
		if has_order(page.find('OrderStatuses').text):
			parsed_order = [name, str(number)]
			parsed_order += parse_order(page)
			if order_id_exists(parsed_order[-1]):
				store_order(parsed_order)
				event = "{} Ordered Domino's!".format(name)
				description = "Date: {}\nTime: {}\n\nYour homie {} ordered:\n\n{}\nThe method of delivery is: {}".format(parsed_order[2], parsed_order[3], name, parsed_order[4], parsed_order[5])
				post_prowl(event, description)
				pizza = True
		time.sleep(5)
	if not food:
		post_prowl(event='Homies still hungry')

main()
