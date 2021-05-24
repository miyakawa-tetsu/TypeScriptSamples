// VS Codeの場合、コマンドパレットで「Deno: Cache」と打ち込むことでモジュールのキャッシュを取得できる。
// try/catchを使う場合、constが使えないと嘆いたことはないだろうか？その時はtry/catch文を関数で囲ってあげて、returnするようにすればいい
import axiod from "https://deno.land/x/axiod/mod.ts";

const response = await axiod.get("https://api.coindesk.com/v1/bpi/currentprice.json");
const data:bitcoinData = response.data;

console.log(`${data.time.updated}時点のビットコインの価格はUSD建てで${data.bpi.USD.rate_float}ドルです`);

interface bitcoinData {
  time: {
    updated: Date,
    updatedISO: Date,
    updateduk: Date
  },
  disclaimer: string,
  chartName: string,
  bpi: {
    USD: exchange,
    GBP: exchange,
    EUR: exchange
  }
}

interface exchange  {
  code: string,
  symbol: string,
  rate: string,
  description: string,
  rate_float: number
}

async function getBitcoinData (): Promise<bitcoinData | string | void> {
  try {
    // throw new TypeError('エラーです。')
    const response = await axiod.get("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data:bitcoinData = response.data;
    return data;
  } catch (e) {
    // axiod(axios)はErrorオブジェクトでなく専用のオブジェクトをthrowしてるっぽい
    return e;
  }
}

await getBitcoinData();
// const a = new Promise().catch(e:Error => {

// })