import React from 'react'
import { Stack, Text } from 'native-base'
import Pdf from 'react-native-pdf'

import styles from './styled-components/styles'

const ViewerPDF = () => {

  /**
   * In order to indicate the path of the PDF document to be displayed, 
   * there are the following ways:
      - Using a file stored on some server, this URL must culminate in 
        the extension 'pdf'.
      - In the case of reading a local file in Android, add the PDF file 
        to the folder in the path 'android/app/src/main/assets/path/to/xxx.pdf', 
        then indicate the path in the JSON source element 'uri' so that it is 
        'bundle-assets://path/to/xxx.pdf'.
   */
  const source = {
    uri: 'bundle-assets://path/to/SimulateResearch.pdf',
    cache: true
  }

  return (
    <Stack
      minH='100%'
      minW='100%'
      justifyContent='flex-start'
      alignItems='center'
    >
      {source.uri.slice(source.uri.length - 3, source.uri.length) === 'pdf' ?
        <Pdf
          trustAllCerts={false}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.group('Data file:')
            console.log(`File path: ${filePath}`)
            console.log(`Number of pages: ${numberOfPages}`)
            console.groupEnd()
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Page ${page}/${numberOfPages}`)
          }}
          onError={(error) => {
            console.log(`Error reading pdf file: ${error}`)
          }}
          onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`)
          }}
          style={styles.pdf}
        />
        :
        <Stack>
          <Text>
            Falta gente
          </Text>
        </Stack>
      }

    </Stack>
  )
}


export default ViewerPDF