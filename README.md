welcome to react-simple-chart

## Install

```sh
npm install react-simple-chart
```

or

```sh
yarn add react-simple-chart
```

## Usage

```js
import ReactSimpleChart from "react-simple-chart";

const App = () => {
  return (
    <ReactSimpleChart
      x={[
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ]}
      datas={[
        {
          label: "sell",
          value: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
          color: "blue",
        },
        {
          label: "buy",
          value: [120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
          color: "red",
        },
      ]}
      yRange={20} //default 10
    />
  );
};
```

| props  |                       type                        | default |
| ------ | :-----------------------------------------------: | ------: |
| x      |                       any[]                       | require |
| datas  | { label: string; color: string; value: number[] } | require |
| yRange |             custumizing y value range             |      10 |
