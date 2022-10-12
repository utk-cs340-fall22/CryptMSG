import socket 
import threading

class Client:
    #def __init__(self):
    #	self.node = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    #	port_and_ip = (self.ip, self.port)
    #	self.node.connect(port_and_ip)

    def __init__(self):
        self.ip = '127.0.0.1'
        self.port = 12345

        self.node = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        port_and_ip = (self.ip, self.port)
        self.node.connect(port_and_ip)

    def SendSMS(self, SMS):
        self.node.send(SMS.encode())

    def RecieveSMS(self):
        while True:       
            data = self.node.recv(1024).decode()
            print(data)

    def main(self):
        while True:
            message = input()
            self.SendSMS(message)

client = Client()
always_receive = threading.Thread(target=client.RecieveSMS)
always_receive.daemon = True
always_receive.start()
client.main()