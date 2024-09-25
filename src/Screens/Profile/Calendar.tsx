import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {colors} from '../../styles/colores';

const CalendarScreen = (props: any) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [markedDates, setMarkedDates] = useState<{[key: string]: any}>({});

  // Attendance colors for each status
  const attendanceColors = {
    present: '#23B40B',
    absent: '#EE1C1C',
    halfDay: '#ECAD0D',
    weekOff: '#CEEAFF',
    sickLeave: '#5F6CE8',
  };

  // Demo data for marking dates
  const demoMarkedDates: any = {
    '2024-09-05': {marked: true, dotColor: attendanceColors.present},
    '2024-09-02': {marked: true, dotColor: attendanceColors.absent},
    '2024-09-03': {marked: true, dotColor: attendanceColors.halfDay},
    '2024-09-04': {marked: true, dotColor: attendanceColors.sickLeave},
  };

  // Function to mark Sundays with custom style
  const markSundays = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const tempMarkedDates = {...demoMarkedDates}; // Start with demo data

    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month, day);
      if (date.getMonth() !== month) {
        break;
      } // Stop when moving to the next month

      if (date.getDay() === 1) {
        // Sunday
        const dateString = date.toISOString().split('T')[0];
        tempMarkedDates[dateString] = {
          marked: false,
          customStyles: {
            container: {
              backgroundColor: '#F0F8FE',
            },
            text: {
              color: colors.black,
            },
          },
        };
      }
    }

    setMarkedDates(tempMarkedDates);
  };

  useEffect(() => {
    markSundays();
  }, []);

  // Handle marking selected date separately without affecting pre-marked dates
  const handleDayPress = (day: any) => {
    const dateString = day.dateString;

    // Maintain current marked dates and update selected date
    const updatedMarkedDates: any = {
      ...markedDates,
      [dateString]: {
        ...(markedDates[dateString] || {}),
        selected: true,
        selectedColor: '#00adf5', // Highlight selected day in blue
      },
    };

    // Reset previous selected date, if it's not part of demoMarkedDates
    if (markedDates[selectedDate] && !demoMarkedDates[selectedDate]) {
      delete updatedMarkedDates[selectedDate].selected;
    }

    setSelectedDate(dateString);
    setMarkedDates(updatedMarkedDates);
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Gilroy-SemiBold',
          color: colors.black,
          marginVertical: 16,
        }}>
        Attendance
      </Text>
      <Calendar
        style={{
          padding: 10,
          borderColor: '#D9D9D9',
          borderWidth: 1,
          borderRadius: 20,
        }}
        current={new Date().toISOString().split('T')[0]}
        onDayPress={handleDayPress}
        markedDates={{
          ...markedDates,
          [selectedDate]: {
            ...markedDates[selectedDate],
            selected: true,
            selectedColor: '#00adf5', // Highlight selected day in blue
          },
        }}
        markingType={'custom'}
        theme={{
          arrowColor: colors.black,
          textSectionTitleColor: colors.black,
          selectedDayBackgroundColor: '#00adf5',
          todayTextColor: colors.primary,
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          monthTextColor: colors.primary,
        }}
      />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 6,
            width: '25%',
          }}>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: attendanceColors.present,
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Gilroy-SemiBold',
              color: colors.black,
              marginVertical: 16,
            }}>
            Present
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 6,
            width: '25%',
          }}>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: attendanceColors.absent,
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Gilroy-SemiBold',
              color: colors.black,
              marginVertical: 16,
            }}>
            Absent
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 6,
            width: '25%',
          }}>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: attendanceColors.halfDay,
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Gilroy-SemiBold',
              color: colors.black,
              marginVertical: 16,
            }}>
            Half day
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 6,
            width: '25%',
          }}>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: attendanceColors.weekOff,
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Gilroy-SemiBold',
              color: colors.black,
              marginVertical: 16,
            }}>
            Week Off
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 6,
            width: '25%',
          }}>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: attendanceColors.sickLeave,
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Gilroy-SemiBold',
              color: colors.black,
              marginVertical: 16,
            }}>
            Sick Leave
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CalendarScreen;
