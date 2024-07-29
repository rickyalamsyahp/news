export const processTableData = data => {
  const processedData = data.map(row => {
    return {
      ...row,
      feedSizePhaseColspan: 1,
      feedSizeDiameterColspan: 1,
    }
  })

  let lastFeedSizePhase = null
  let lastFeedSizeDiameter = null

  processedData.forEach((row, index) => {
    if (lastFeedSizePhase === row.feedSizePhase) {
      processedData[index - 1].feedSizePhaseColspan++
      row.feedSizePhaseColspan = 0
    } else {
      lastFeedSizePhase = row.feedSizePhase
    }

    if (lastFeedSizeDiameter === row.feedSizeDiameter) {
      processedData[index - 1].feedSizeDiameterColspan++
      row.feedSizeDiameterColspan = 0
    } else {
      lastFeedSizeDiameter = row.feedSizeDiameter
    }
  })

  return processedData
}
