import { Box } from "@gluestack-ui/themed";
import Pdf from "react-native-pdf";

import uri from "@/src/assets/files/pdf_file";

import styles from "./styled-components/styles";

const ViewerPDF = () => {
  const source = {
    uri: `data:application/pdf;base64,${uri}`,
    cache: true,
  };

  return (
    <Box
      minHeight="100%"
      minWidth="100%"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Box>
        <Pdf
          style={styles.pdf}
          source={source}
          trustAllCerts={false}
        />
      </Box>
    </Box>
  );
};

export default ViewerPDF;