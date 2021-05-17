import { Web3ApiClient } from "@web3api/client-js";
import { terraSignerPlugin } from "@terra/signer-web3api-plugin-js";

const signer = terraSignerPlugin({
  privkey: "..."
});

const client = new Web3ApiClient({
  redirects: [{
    from: "ens/api.signer.terra.eth",
    to: signer
  }]
});

client.query({
  uri: "ens/api.terra.eth",
  query: `mutation {
    createAndSignTx(
      wallet: {
        type: "SimplePublicKey"
        value: "..."
      }
      options: {
        msgs: $msgs
        memo: "test messages"
      }
    )
  }`,
  variables: {
    msgs: [{
      from: "...",
      to: "...",
      amount: [{
        denom: "ueur",
        amount: "5000"
      }]
    }]
  }
})
