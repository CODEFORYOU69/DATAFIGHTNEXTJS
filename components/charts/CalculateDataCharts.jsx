const calculateData = (rounds) => {
    const initialData = {
      att_fd_data: 0,
      att_od_data: 0,
      att_fg_data: 0,
      att_og_data: 0,
      def_fd_data: 0,
      def_od_data: 0,
      def_fg_data: 0,
      def_og_data: 0,
      cac_fd_data: 0,
      cac_od_data: 0,
      cac_fg_data: 0,
      cac_og_data: 0,
    };
  
    return rounds.reduce((acc, round) => {
      Object.keys(initialData).forEach((key) => {
        const [actionType, position] = key.split('_');
        for (let i = 1; i <= 5; i++) {
          for (let j = 1; j <= 2; j++) {
            const dataKey = `${actionType}_${position}_${i}_by_fighter${j}`;
            if (round.hasOwnProperty(dataKey)) {
              acc[key] += round[dataKey];
            }
          }
        }
      });
      return acc;
    }, { ...initialData });
  };
  
  
  export default calculateData;