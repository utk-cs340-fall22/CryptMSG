import socket
import threading

class Server: 
	def __init__(self): 
		self.ip = '127.0.0.1'
		self.port = 12345

		self.node = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
		ip_and_port = (self.ip, self.port)
		self.node.bind(ip_and_port)
		self.node.listen(5)
		self.connection, addr = self.node.accept()

	def SendSMS(self, SMS): 
		self.connection.send(SMS.encode())

	def RecieveSMS(self): 
		while True: 
			data = self.connection.recv(1024).decode()
			print(data)

	def main(self): 
		while True: 
			message = input()
			self.SendSMS(message)

server = Server()
always_recieve = threading.Thread(target=server.RecieveSMS)
always_recieve.daemon = True
always_recieve.start()
server.main()