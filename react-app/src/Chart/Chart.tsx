import React, { useEffect, useState } from 'react';
import { Bar } from '@reactchartjs/react-chart.js';
// import { defaults } from 'chart.js';
import axios from 'axios';

const Chart = ({
  labels,
  dataValues,
}: {
  labels: any;
  dataValues: number[];
}) => {
  // Disable animating charts by default.
  // defaults.global.animation = true;
  // labels = {
  //               red: 'Red',
  //               blue: 'Blue',
  //               yellow: 'Yellow',
  //               green: 'Green',
  //               purple: 'Purple',
  //               orange: 'Orange',
  //             }
  // const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  const [clicked, setClicked] = useState(false);

  const generateRandomColors = () => {
    return [Math.floor(Math.random() * 16777215).toString(16)];
  };

  const [colors, setColors] = useState(generateRandomColors); // compute colors on the fly

  const labelsToArray = Object.values(labels) as string[];
  const dataValuesAdd1 = dataValues.map((item) => item + 1);

  // const dataValuesAdd2 = dataValues.reduce((accumulator, item) => item + 1, 0);
  // const toColors = () => dataValues.map(item => )

  // useEffect(() => {
  //   // setColors(['mynewcolor']);
  //   if (clicked) {
  //     console.log(colors);

  //   }
  // }, [clicked, colors]);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${colors} times`;
  });

  const [results, setResults] = useState(null);
  console.log('results', results);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux'
      );
      // console.log('result', result.data);

      setResults(result.data);
    };

    fetchData();
  }, []);

  const data = {
    labels: labelsToArray,
    datasets: [
      {
        label: '# of Votes',
        data: dataValuesAdd1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      type="bar"
      data={data}
      width={50}
      height={25}
      options={{ maintainAspectRatio: true }}
      // onClick={() => setClicked(true)}
    />
  );
};

export default Chart;
