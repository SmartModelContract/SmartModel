const marketplaceContractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "modelHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
    ],
    name: "ModelSubmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "requester",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "trainingDataHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "testingDataHash",
        type: "string",
      },
    ],
    name: "RequestCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "modelHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "context",
        type: "string",
      },
      {
        internalType: "string",
        name: "trainingDataHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "testingDataHash",
        type: "string",
      },
    ],
    name: "createRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "fulfillRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "modelHash",
        type: "string",
      },
    ],
    name: "submitModel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ModelCoin",
        name: "modelCoinAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "getRequest",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "requester",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "reward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateral",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "context",
            type: "string",
          },
          {
            internalType: "string",
            name: "trainingDataHash",
            type: "string",
          },
          {
            internalType: "string",
            name: "testingDataHash",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isFulfilled",
            type: "bool",
          },
        ],
        internalType: "struct MLModelMarketplace.ModelRequest",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "getSubmission",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "modelHash",
            type: "string",
          },
          {
            internalType: "address",
            name: "contributor",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isSubmitted",
            type: "bool",
          },
        ],
        internalType: "struct MLModelMarketplace.ModelSubmission",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "modelCoin",
    outputs: [
      {
        internalType: "contract ModelCoin",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "requestCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "address",
        name: "requester",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "context",
        type: "string",
      },
      {
        internalType: "string",
        name: "trainingDataHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "testingDataHash",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isFulfilled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "submissions",
    outputs: [
      {
        internalType: "string",
        name: "modelHash",
        type: "string",
      },
      {
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isSubmitted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];