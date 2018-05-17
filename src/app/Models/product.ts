export interface Product {
    // constructor(pname,
    //     pqvalue,
    //     pqtype,
    //     pcost,
    //     purl) {
    //         this.pname = pname;
    //         this.pqvalue = pqvalue;
    //         this.pqtype = pqtype;
    //         this.pcost = pcost;
    //         this.purl = purl;
    //         this.pTimestamp = 0;
    //     }
    id: number;
    pname: string;
    pqvalue: number;
    pqtype: string;
    pcost: number;
    purl: string;
    pdescrp: string;
    // pTimestamp: number;
}
