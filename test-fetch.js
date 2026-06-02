async function test() {
  try {
    const response = await fetch("https://testnet-rpc.iopn.tech", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_call",
        params: [{
          to: "0xea08D46D74F42bFCC1BC16e19C1bE011Bce8122e",
          data: "0xc395f857" // keccak256("repositoryUrl()")
        }, "latest"],
        id: 1
      })
    });
    
    const rpcData = await response.json();
    console.log("RPC Data:", rpcData);
    
    if (rpcData.result && rpcData.result !== "0x") {
      const hex = rpcData.result.slice(2);
      const length = parseInt(hex.slice(64, 128), 16);
      const stringHex = hex.slice(128, 128 + length * 2);
      
      let onChainRepo = "";
      for (let i = 0; i < stringHex.length; i += 2) {
        onChainRepo += String.fromCharCode(parseInt(stringHex.substring(i, i + 2), 16));
      }
      console.log("Decoded Repo:", onChainRepo);
      console.log("Matches?", onChainRepo === "https://github.com/alisakusumah/veyra");
    } else {
      console.log("No valid result found.");
    }
  } catch (e) {
    console.error("Error:", e);
  }
}
test();
