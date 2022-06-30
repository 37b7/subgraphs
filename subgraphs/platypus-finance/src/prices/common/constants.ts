import * as FANTOM from "../config/fantom";
import * as MAINNET from "../config/mainnet";
import * as AVALANCHE from "../config/avalanche";
import * as ARBITRUM_ONE from "../config/arbitrum_one";

import { Address, BigDecimal, BigInt, TypedMap } from "@graphprotocol/graph-ts";
import { SushiSwapPair__getReservesResult } from "../../../generated/Pool/SushiSwapPair";

///////////////////////////////////////////////////////////////////////////
/////////////////////////////////// COMMON ////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export const BIGINT_ZERO = BigInt.fromI32(0);
export const BIGINT_TEN = BigInt.fromI32(10);
export const BIGINT_TEN_THOUSAND = BigInt.fromI32(10000);

export const BIGDECIMAL_ZERO = new BigDecimal(BIGINT_ZERO);

export const DEFAULT_USDC_DECIMALS = 6;
export const DEFAULT_DECIMALS = BigInt.fromI32(18);

export const ZERO_ADDRESS_STRING = "0x0000000000000000000000000000000000000000";

export const ZERO_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");
export const CHAIN_LINK_USD_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000348");

export const NETWORK_BASE_TOKEN_MAP = new TypedMap<string, string[]>();
NETWORK_BASE_TOKEN_MAP.set(MAINNET.NETWORK_STRING, [MAINNET.BASE_TOKEN, MAINNET.WRAPPED_BASE_TOKEN]);
NETWORK_BASE_TOKEN_MAP.set(FANTOM.NETWORK_STRING, [FANTOM.BASE_TOKEN, FANTOM.WRAPPED_BASE_TOKEN]);
NETWORK_BASE_TOKEN_MAP.set(ARBITRUM_ONE.NETWORK_STRING, [ARBITRUM_ONE.BASE_TOKEN, ARBITRUM_ONE.WRAPPED_BASE_TOKEN]);
NETWORK_BASE_TOKEN_MAP.set(AVALANCHE.NETWORK_STRING, [AVALANCHE.BASE_TOKEN, AVALANCHE.WRAPPED_BASE_TOKEN]);

export const WRAPPED_BASE_TOKEN_CALCULATIONS_ADDRESS_MAP = new TypedMap<string, string>();

export const WHITELIST_TOKENS_LIST: string[] = [
  "WETH",
  "WAVAX",
  "USDT",
  "DAI",
  "USDC",
  "ETH",
  "WBTC",
  "EURS",
  "LINK",
  "gfUSDT",
  "WFTM",
  "fBTC",
  "FRAX",
  "CRV",
];

///////////////////////////////////////////////////////////////////////////
///////////////////////////// CURVE CONTRACT //////////////////////////////
///////////////////////////////////////////////////////////////////////////

export const CURVE_CALCULATIONS_ADDRESS_MAP = new TypedMap<string, Address>();
CURVE_CALCULATIONS_ADDRESS_MAP.set(MAINNET.NETWORK_STRING, MAINNET.CURVE_CALCULATIONS_ADDRESS);
CURVE_CALCULATIONS_ADDRESS_MAP.set(FANTOM.NETWORK_STRING, FANTOM.CURVE_CALCULATIONS_ADDRESS);
CURVE_CALCULATIONS_ADDRESS_MAP.set(ARBITRUM_ONE.NETWORK_STRING, ARBITRUM_ONE.CURVE_CALCULATIONS_ADDRESS);
CURVE_CALCULATIONS_ADDRESS_MAP.set(AVALANCHE.NETWORK_STRING, AVALANCHE.CURVE_CALCULATIONS_ADDRESS);

export const CURVE_REGISTRY_ADDRESS_MAP = new TypedMap<string, Address>();
CURVE_REGISTRY_ADDRESS_MAP.set(MAINNET.NETWORK_STRING, MAINNET.CURVE_REGISTRY_ADDRESS);
CURVE_REGISTRY_ADDRESS_MAP.set(FANTOM.NETWORK_STRING, FANTOM.CURVE_REGISTRY_ADDRESS);
CURVE_REGISTRY_ADDRESS_MAP.set(ARBITRUM_ONE.NETWORK_STRING, ARBITRUM_ONE.CURVE_REGISTRY_ADDRESS);
CURVE_REGISTRY_ADDRESS_MAP.set(AVALANCHE.NETWORK_STRING, AVALANCHE.CURVE_REGISTRY_ADDRESS);

export const CURVE_POOL_REGISTRY_ADDRESS_MAP = new TypedMap<string, Address>();
CURVE_POOL_REGISTRY_ADDRESS_MAP.set(MAINNET.NETWORK_STRING, MAINNET.CURVE_POOL_REGISTRY_ADDRESS);
CURVE_POOL_REGISTRY_ADDRESS_MAP.set(FANTOM.NETWORK_STRING, FANTOM.CURVE_POOL_REGISTRY_ADDRESS);
CURVE_POOL_REGISTRY_ADDRESS_MAP.set(FANTOM.NETWORK_STRING, FANTOM.CURVE_POOL_REGISTRY_ADDRESS);
CURVE_POOL_REGISTRY_ADDRESS_MAP.set(AVALANCHE.NETWORK_STRING, AVALANCHE.CURVE_POOL_REGISTRY_ADDRESS);

///////////////////////////////////////////////////////////////////////////
///////////////////////////// SUSHISWAP CONTRACT //////////////////////////
///////////////////////////////////////////////////////////////////////////

export const SUSHISWAP_DEFAULT_RESERVE_CALL = new SushiSwapPair__getReservesResult(
  BIGINT_ZERO,
  BIGINT_ZERO,
  BIGINT_ZERO,
);

export const SUSHISWAP_CALCULATIONS_ADDRESS_MAP = new TypedMap<string, Address>();
SUSHISWAP_CALCULATIONS_ADDRESS_MAP.set(MAINNET.NETWORK_STRING, MAINNET.SUSHISWAP_CALCULATIONS_ADDRESS);
SUSHISWAP_CALCULATIONS_ADDRESS_MAP.set(FANTOM.NETWORK_STRING, FANTOM.SUSHISWAP_CALCULATIONS_ADDRESS);
SUSHISWAP_CALCULATIONS_ADDRESS_MAP.set(ARBITRUM_ONE.NETWORK_STRING, ARBITRUM_ONE.SUSHISWAP_CALCULATIONS_ADDRESS);
SUSHISWAP_CALCULATIONS_ADDRESS_MAP.set(AVALANCHE.NETWORK_STRING, AVALANCHE.SUSHISWAP_CALCULATIONS_ADDRESS);

export const SUSHISWAP_WETH_ADDRESS = new TypedMap<string, Address>();
SUSHISWAP_WETH_ADDRESS.set(MAINNET.NETWORK_STRING, MAINNET.SUSHISWAP_WETH_ADDRESS);
SUSHISWAP_WETH_ADDRESS.set(FANTOM.NETWORK_STRING, FANTOM.SUSHISWAP_WETH_ADDRESS);
SUSHISWAP_WETH_ADDRESS.set(ARBITRUM_ONE.NETWORK_STRING, ARBITRUM_ONE.SUSHISWAP_WETH_ADDRESS);
SUSHISWAP_WETH_ADDRESS.set(AVALANCHE.NETWORK_STRING, AVALANCHE.SUSHISWAP_WETH_ADDRESS);

export const SUSHISWAP_ROUTER_ADDRESS_MAP = new TypedMap<string, TypedMap<string, Address>>();
SUSHISWAP_ROUTER_ADDRESS_MAP.set(MAINNET.NETWORK_STRING, MAINNET.SUSHISWAP_ROUTER_ADDRESS);
SUSHISWAP_ROUTER_ADDRESS_MAP.set(FANTOM.NETWORK_STRING, FANTOM.SUSHISWAP_ROUTER_ADDRESS);
SUSHISWAP_ROUTER_ADDRESS_MAP.set(ARBITRUM_ONE.NETWORK_STRING, ARBITRUM_ONE.SUSHISWAP_ROUTER_ADDRESS);
SUSHISWAP_ROUTER_ADDRESS_MAP.set(AVALANCHE.NETWORK_STRING, AVALANCHE.SUSHISWAP_ROUTER_ADDRESS);

export const TRADERJOE_ROUTER_ADDRESS_MAP = new TypedMap<string, TypedMap<string, Address>>();
TRADERJOE_ROUTER_ADDRESS_MAP.set(AVALANCHE.NETWORK_STRING, AVALANCHE.TRADERJOE_ROUTER_ADDRESS);

///////////////////////////////////////////////////////////////////////////
///////////////////////////// UNISWAP CONTRACT ////////////////////////////
///////////////////////////////////////////////////////////////////////////

// export const UNISWAP_DEFAULT_RESERVE_CALL = new UniswapPair__getReservesResult(BIGINT_ZERO, BIGINT_ZERO, BIGINT_ZERO);

export const UNISWAP_ROUTER_CONTRACT_ADDRESSES = new TypedMap<string, TypedMap<string, Address>>();
UNISWAP_ROUTER_CONTRACT_ADDRESSES.set(MAINNET.NETWORK_STRING, MAINNET.UNISWAP_ROUTER_ADDRESS);
UNISWAP_ROUTER_CONTRACT_ADDRESSES.set(FANTOM.NETWORK_STRING, FANTOM.SPOOKY_SWAP_ROUTER_ADDRESS);
UNISWAP_ROUTER_CONTRACT_ADDRESSES.set(ARBITRUM_ONE.NETWORK_STRING, ARBITRUM_ONE.UNISWAP_ROUTER_ADDRESS);
UNISWAP_ROUTER_CONTRACT_ADDRESSES.set(AVALANCHE.NETWORK_STRING, AVALANCHE.UNISWAP_ROUTER_ADDRESS);

///////////////////////////////////////////////////////////////////////////
///////////////////////////// YEARNLENS CONTRACT //////////////////////////
///////////////////////////////////////////////////////////////////////////

export const YEARN_LENS_CONTRACT_ADDRESS = new Map<string, string>();
YEARN_LENS_CONTRACT_ADDRESS.set(MAINNET.NETWORK_STRING, MAINNET.YEARN_LENS_CONTRACT_ADDRESS);
YEARN_LENS_CONTRACT_ADDRESS.set(FANTOM.NETWORK_STRING, FANTOM.YEARN_LENS_CONTRACT_ADDRESS);
YEARN_LENS_CONTRACT_ADDRESS.set(ARBITRUM_ONE.NETWORK_STRING, ARBITRUM_ONE.YEARN_LENS_CONTRACT_ADDRESS);
YEARN_LENS_CONTRACT_ADDRESS.set(AVALANCHE.NETWORK_STRING, AVALANCHE.YEARN_LENS_CONTRACT_ADDRESS);

///////////////////////////////////////////////////////////////////////////
///////////////////////////// CHAINLINK CONTRACT //////////////////////////
///////////////////////////////////////////////////////////////////////////

export const CHAIN_LINK_CONTRACT_ADDRESS = new Map<string, Address>();
CHAIN_LINK_CONTRACT_ADDRESS.set(MAINNET.NETWORK_STRING, MAINNET.CHAIN_LINK_CONTRACT_ADDRESS);
CHAIN_LINK_CONTRACT_ADDRESS.set(FANTOM.NETWORK_STRING, FANTOM.CHAIN_LINK_CONTRACT_ADDRESS);
CHAIN_LINK_CONTRACT_ADDRESS.set(ARBITRUM_ONE.NETWORK_STRING, ARBITRUM_ONE.CHAIN_LINK_CONTRACT_ADDRESS);
CHAIN_LINK_CONTRACT_ADDRESS.set(AVALANCHE.NETWORK_STRING, AVALANCHE.CHAIN_LINK_CONTRACT_ADDRESS);

///////////////////////////////////////////////////////////////////////////
///////////////////////////////// HELPERS /////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export const WHITELIST_TOKENS_MAP = new TypedMap<string, TypedMap<string, Address>>();
WHITELIST_TOKENS_MAP.set(MAINNET.NETWORK_STRING, MAINNET.WHITELIST_TOKENS);
WHITELIST_TOKENS_MAP.set(FANTOM.NETWORK_STRING, FANTOM.WHITELIST_TOKENS);
WHITELIST_TOKENS_MAP.set(ARBITRUM_ONE.NETWORK_STRING, ARBITRUM_ONE.WHITELIST_TOKENS);
WHITELIST_TOKENS_MAP.set(AVALANCHE.NETWORK_STRING, AVALANCHE.WHITELIST_TOKENS);