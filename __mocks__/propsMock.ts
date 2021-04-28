/* eslint-disable prettier/prettier */
const linie8304: Linie8304 = {"global":{"INFOS":[{"id":"1","text":"an Schultagen (in Bayern)"},{"id":"A","text":"Montag - Freitag (Werktage)"}]},"arrays":[{"FROM":"Bad Königshofen","TO":"Bad Neustadt","INFO":["A"],"array":[{"bushaltestelle":"Bad Königshofen, Franken-T...","zeiten":["NULL"]}]},{"FROM":"Bad Neustadt","TO":"Bad Königshofen","INFO":["1"],"array":[{"bushaltestelle":"Bad Neustadt, ZOB","zeiten":["05:45"]}]}]};
const linien: Linien[] = [{"id":"8304","url":"2361ff205b3905b7ebfc"}];

export default {linie8304, linien};

interface Linie8304 {
  global: Global;
  arrays: Arrays[];
}

interface Global {
  INFOS: Info[]
}

interface Info {
  id: string;
  text: string;
}

interface Arrays {
  FROM: string;
  TO: string;
  INFO: string[];
  array: array[];
}

interface array {
  bushaltestelle: string;
  zeiten: string[];
}

interface Linien {
  id: string;
  url: string;
}
