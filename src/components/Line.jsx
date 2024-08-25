import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
import React from 'react'

const data=[
    {
      "id": "japan",
      "color": "hsl(155, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 6
        },
        {
          "x": "helicopter",
          "y": 287
        },
        {
          "x": "boat",
          "y": 93
        },
        {
          "x": "train",
          "y": 220
        },
        {
          "x": "subway",
          "y": 197
        },
        {
          "x": "bus",
          "y": 42
        },
        {
          "x": "car",
          "y": 137
        },
        {
          "x": "moto",
          "y": 166
        },
        {
          "x": "bicycle",
          "y": 121
        },
        {
          "x": "horse",
          "y": 47
        },
        {
          "x": "skateboard",
          "y": 72
        },
        {
          "x": "others",
          "y": 278
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(356, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 28
        },
        {
          "x": "helicopter",
          "y": 147
        },
        {
          "x": "boat",
          "y": 172
        },
        {
          "x": "train",
          "y": 221
        },
        {
          "x": "subway",
          "y": 42
        },
        {
          "x": "bus",
          "y": 228
        },
        {
          "x": "car",
          "y": 234
        },
        {
          "x": "moto",
          "y": 145
        },
        {
          "x": "bicycle",
          "y": 125
        },
        {
          "x": "horse",
          "y": 88
        },
        {
          "x": "skateboard",
          "y": 195
        },
        {
          "x": "others",
          "y": 251
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(2, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 297
        },
        {
          "x": "helicopter",
          "y": 210
        },
        {
          "x": "boat",
          "y": 83
        },
        {
          "x": "train",
          "y": 268
        },
        {
          "x": "subway",
          "y": 76
        },
        {
          "x": "bus",
          "y": 141
        },
        {
          "x": "car",
          "y": 75
        },
        {
          "x": "moto",
          "y": 185
        },
        {
          "x": "bicycle",
          "y": 110
        },
        {
          "x": "horse",
          "y": 172
        },
        {
          "x": "skateboard",
          "y": 114
        },
        {
          "x": "others",
          "y": 103
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(288, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 265
        },
        {
          "x": "helicopter",
          "y": 111
        },
        {
          "x": "boat",
          "y": 106
        },
        {
          "x": "train",
          "y": 219
        },
        {
          "x": "subway",
          "y": 138
        },
        {
          "x": "bus",
          "y": 287
        },
        {
          "x": "car",
          "y": 11
        },
        {
          "x": "moto",
          "y": 264
        },
        {
          "x": "bicycle",
          "y": 74
        },
        {
          "x": "horse",
          "y": 179
        },
        {
          "x": "skateboard",
          "y": 195
        },
        {
          "x": "others",
          "y": 69
        }
      ]
    }
  ]
function Line({isDashboard=false}) {
    const theme=useTheme();

  return (
    <Box sx={{height: isDashboard? "288px":"75vh"}}>
 <ResponsiveLine
        data={data}
         curve="catmullRom"
        theme={{
            "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "axis": {
                "domain": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    }
                },
                "legend": {
                    "text": {
                        "fontSize": 12,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": theme.palette.text.primary,
                        "strokeWidth": 1
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke": "#dddddd",
                    "strokeWidth": 0
                }
            },
            "legends": {
                "title": {
                    "text": {
                        "fontSize": 11,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "ticks": {
                    "line": {},
                    "text": {
                        "fontSize": 10,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "annotations": {
                "text": {
                    "fontSize": 13,
                    "fill": "#333333",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "link": {
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": "#000000",
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": "#000000",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                }
            },
            "tooltip": {
                "wrapper": {},
                "container": {
                    "background": "#ffffff",
                    "color": "#333333",
                    "fontSize": 12
                },
                "basic": {},
                "chip": {},
                "table": {},
                "tableCell": {},
                "tableCellValue": {}
            }
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard?null: 'transportation',
            legendOffset: 40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard?null: 'count',
            legendOffset: -50,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />    </Box>
  )
}

export default Line
