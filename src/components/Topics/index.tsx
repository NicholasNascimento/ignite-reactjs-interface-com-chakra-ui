import { Grid, GridItem } from "@chakra-ui/layout";
import { Topic } from "./Topic";

export default function Topics() {
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      
    <GridItem>
      <Topic icon="cocktail" text="vida noturna" />
    </GridItem>
    <GridItem>
      <Topic icon="surf" text="praia" />
    </GridItem>
    <GridItem>
      <Topic icon="building" text="moderno" />
    </GridItem>
    <GridItem>
      <Topic icon="museum" text="clássico" />
      </GridItem>
    <GridItem colSpan={[2, 2, 2, 1]}>
      <Topic icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}