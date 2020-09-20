import React from "react";
declare const ReactSimpleChart: React.FC<{
    x: any[];
    yRange?: number;
    datas: {
        label: string;
        value: number[];
        color: string;
    }[];
}>;
export default ReactSimpleChart;
