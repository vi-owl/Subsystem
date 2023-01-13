import { useState, useEffect } from "react";
import { dbRefMinMax, dbRefHist} from "../firebase";
import { Line } from 'react-chartjs-3';

function TempChart () {

    const[state, setState] = useState ({
    })
    useEffect(()=>{
        dbRefHist.limitToLast(6).on("value", snapshot => {
            var history = snapshot.val();
            var date6=Object.values(history)[5].date
            var tempMax6=Object.values(history)[5].tempmax
            var tempMin6=Object.values(history)[5].tempmin
            var dd = date6.split("-")[2].split(" ")[0];
            var mm = date6.split("-")[1].padStart(2, "0");
            var day6=dd+'.'+mm
            setState(s => ({
                ...s,
                d6:day6,
                Min6:tempMin6,
                Max6:tempMax6,
                labelMin:"Temperatura minimalna [℃]",
                labelMax:"Temperatura maksymalna [℃]"

            }))
            //console.log(state.d6)
           
            var date5=Object.values(history)[4].date
            var tempMax5=Object.values(history)[4].tempmax
            var tempMin5=Object.values(history)[4].tempmin
            var dd5 = date5.split("-")[2].split(" ")[0];
            var mm5 = date5.split("-")[1].padStart(2, "0");
            var day5=dd5+'.'+mm5
            setState(s => ({
                ...s,
                d5:day5,
                Min5:tempMin5,
                Max5:tempMax5
            }))

            var date4=Object.values(history)[3].date
            var tempMax4=Object.values(history)[3].tempmax
            var tempMin4=Object.values(history)[3].tempmin
            var dd4 = date4.split("-")[2].split(" ")[0];
            var mm4 = date4.split("-")[1].padStart(2, "0");
            var day4=dd4+'.'+mm4
            setState(s => ({
                ...s,
                d4:day4,
                Min4:tempMin4,
                Max4:tempMax4
            }))
            
            var date3=Object.values(history)[2].date
            var tempMax3=Object.values(history)[2].tempmax
            var tempMin3=Object.values(history)[2].tempmin
            var dd3 = date3.split("-")[2].split(" ")[0];
            var mm3 = date3.split("-")[1].padStart(2, "0");
            var day3=dd3+'.'+mm3
            setState(s => ({
                ...s,
                d3:day3,
                Min3:tempMin3,
                Max3:tempMax3
            }))
            var date2=Object.values(history)[1].date
            var tempMax2=Object.values(history)[1].tempmax
            var tempMin2=Object.values(history)[1].tempmin
            var dd2 = date2.split("-")[2].split(" ")[0];
            var mm2 = date2.split("-")[1].padStart(2, "0");
            var day2=dd2+'.'+mm2
            setState(s => ({
                ...s,
                d2:day2,
                Min2:tempMin2,
                Max2:tempMax2
            }))
            var date1=Object.values(history)[0].date
            var tempMax1=Object.values(history)[0].tempmax
            var tempMin1=Object.values(history)[0].tempmin
            var dd1 = date1.split("-")[2].split(" ")[0];
            var mm1 = date1.split("-")[1].padStart(2, "0");
            var day1=dd1+'.'+mm1
            setState(s => ({
                ...s,
                d1:day1,
                Min1:tempMin1,
                Max1:tempMax1
            }))
        })

            dbRefMinMax.on("value", snapshot => {
                var minmax = snapshot.val();
                var date7=minmax.date
                var tempMax7=minmax.tempmax
                var tempMin7=minmax.tempmin
                var dd7 = date7.split("-")[2].split(" ")[0];
                var mm7 = date7.split("-")[1].padStart(2, "0");
                date7=dd7+'.'+mm7
                setState(s => ({
                    ...s,
                   d7:date7,
                   Min7:tempMin7,
                   Max7:tempMax7
               }))
        })
        return () => {
          setState(s => ({
            ...s,    
       }))
        }
        
},[]);

return (
      <div>
        <Line id='Temp' redraw={true}
          data={{labels: [state.d1, state.d2, state.d3, state.d4, state.d5, state.d6, state.d7],
            datasets: [
                {
                label: [state.labelMax],
                data: [state.Max1, state.Max2, state.Max3,state.Max4, state.Max5, state.Max6,state.Max7],
                fill: false,
                borderColor: "rgba(227,22,22,1)"
                },
                {
                label: state.labelMin,
                data: [state.Min1, state.Min2, state.Min3, state.Min4, state.Min5, state.Min6, state.Min7],
                fill: false,
                borderColor: "#129FE5"  
                }
            ]}}
            legend = {{
                display: true,
                position: "bottom",
                labels: {
                  fontColor: "#fffbeb5e",
                  fontSize: 9,
                  fontFamily:"monospace"
                }
              }}
              options = {{
                scales: {
                  yAxes: [
                    { gridLines: {
                        color: "#fffbeb5e"
                    },
                        ticks: {
                          fontColor: "#fffbeb5e"
                        },
                    }
                  ],
                  xAxes: [{ 
                    gridLines: {
                        color: "#fffbeb5e"
                    },
                    ticks: {
                      fontColor: "#fffbeb5e"
                    },
                }],
                }
              }}
         
           
        />
      </div>

    );
  }

export {TempChart}