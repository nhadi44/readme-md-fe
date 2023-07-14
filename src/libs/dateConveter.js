import moment from "moment";

export const datePostConvert = (time) => {
  let formatedTime;

  const currentTime = moment();
  const postMoment = moment(time);

  if (currentTime.diff(postMoment, "days") < 1) {
    formatedTime = postMoment.fromNow();
  } else {
    formatedTime = postMoment.calendar({
      lastDay: "DD MMMM YYYY",
      lastWeek: "DD MMMM YYYY",
      sameElse: "DD MMMM YYYY",
    });
  }

  return formatedTime;
};
