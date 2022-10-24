import hashLib
class BlockChain:
    def __init__(self,prev,actList): #prev is the previous blocks hash and actList is the list of all actions
        self.prev = prev
        self.actList = actList

        self.block_data = " ".join(actList) + " " + prev
        self.block_hash = hashlib.sha256(self.block_data.encode()).hexdigest()

first_action = BlockChain("First Transaction", ["Bob","Amy"])

print(first_action.block_data)