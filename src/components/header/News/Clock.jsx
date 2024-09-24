/* eslint-disable react/display-name */
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Text } from "@chakra-ui/react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Text className="clock__item">
      {format(currentTime, "dd MMM, eeee hh:mm", {
        locale: ru,
      })}
    </Text>
  );
};

export default Clock;