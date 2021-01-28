import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  ButtonGroup,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.white,
    width: "100%",
  },
  white: {
    color: theme.palette.white,
  },
  title: {
    padding: "6px 0 12px",
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["學歷", "工作經歷"];
}

/* {
  period: "2016/09 - 2019/06",
  experience: [
    "舉辦有學生諾貝爾獎之稱的 Hult Prize 校園初賽，並推派優勝隊伍出國角逐 100 萬美元總獎金",
  ],
} */
/* {
        period: "2018/07 - 2018/08",
        experience: [
          "製作台灣公司至上証Ａ股上市之機會和資格報告書並上台簡報。",
          "了解中國金融市場（Ex：上海證券市場，期貨等）之運作及其相關知識。",
          "進行企業參訪，深入了解金融產業細節還其運作情形。",
        ],
      } */
function getStepContent(step) {
  switch (step) {
    case 0:
      return [
        {
          title: "國立清華大學 經濟系學士",
          period: "2016/09 - 2019/06",
          experience: [
            "舉辦有學生諾貝爾獎之稱的 Hult Prize 校園初賽，並推派優勝隊伍出國角逐 100 萬美元總獎金",
          ],
        },
        {
          title: "義大利帕多瓦大學 經管學院交換學生",
          period: "2016/09 - 2019/06",
          experience: [],
        },
      ];
    case 1: {
      return [
        {
          title: "上海證券交易所 實習生",
          period: "2018/07 - 2018/08",
          experience: [
            "製作台灣公司至上証Ａ股上市之機會和資格報告書並上台簡報。",
            "了解中國金融市場（Ex：上海證券市場，期貨等）之運作及其相關知識。",
            "進行企業參訪，深入了解金融產業細節還其運作情形。",
          ],
        },
        {
          title: "FunNow 專案執行",
          period: "2019/07 - 2020/05",
          experience: [
            "巡田水計畫： 建立業績中游店家關心計畫，增強品牌與店家間的聯繫，進而增加店家在平台上的銷售成績。",
            "業務評比機制：集合公司各區域業務每月業績，建立每月定期審核機制，讓公司內員工更加了解業務團隊的努力，也激勵業務團隊繼續前進。",
            "店家忠誠計畫：規劃合作店家階級評比制度，並派發店家成績單，驅使店家主動關心與平台合作情形，而非被動的接受平台方資訊。",
          ],
        },
      ];
    }
    default:
      return [
        {
          title: "",
          period: "",
          experience: [],
        },
      ];
  }
}

export default function Experience() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" color="inherit">
        我的經歷
      </Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <Typography className={classes.white} variant="h5">
                {label}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography className={classes.white}>
                {getStepContent(index).map((experience, index) => (
                  <div>
                    <Typography variant="h6">{experience.title}</Typography>
                    <div>{experience.period}</div>
                    <ul>
                      {experience.experience.map((experience) => (
                        <li>{experience}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Typography>
              <div className={classes.actionsContainer}>
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  color="primary"
                >
                  <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    color="white"
                    className={classes.button}
                  >
                    看學歷
                  </Button>
                  <Button
                    variant="contained"
                    color="white"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "看完了" : "看經歷"}
                  </Button>
                </ButtonGroup>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography className={classes.white}>
            以上是我的學經歷，重看請點「 再看一次 」鍵
          </Typography>
          <Button
            variant="contained"
            color="white"
            onClick={handleReset}
            className={classes.button}
          >
            再看一次
          </Button>
        </Paper>
      )}
    </div>
  );
}
