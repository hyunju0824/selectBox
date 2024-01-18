import { selector } from "recoil";
import axios, { Axios } from "axios";

export const selectList = selector ({
    key : "selectList",
    get : async () => {
        const { Data } = await axios.get("https://gist.githubusercontent.com/softgi/d6d53a41f9f76800f998a7055d678295/raw/ca67aed2e99eda205394c88ffa97db297014be78/data.json");
        return Data;
    },
});