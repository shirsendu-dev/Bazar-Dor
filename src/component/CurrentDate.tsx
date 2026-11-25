const CurrentDate = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <p className="text-[14px] text-gray-500">
      {date}
    </p>
  );
};

export default CurrentDate;