import { Heading, HStack, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export const TrendingTable = () => {
    return (
        <Stack width={'736px'}>
            <HStack>
                <Heading>🔥 Trending</Heading>
                <Select placeholder='All types' width={'130px'}>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </HStack>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Protocol</Th>
                            <Th>FIL Total Reserves</Th>
                            <Th>24H Change</Th>
                            <Th>Vaults Audits</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>AAVE</Td>
                            <Td>$41.263,00</Td>
                            <Td>+35%</Td>
                            <Td>4</Td>
                        </Tr>
                        <Tr>
                            <Td>AAVE</Td>
                            <Td>$41.263,00</Td>
                            <Td>+35%</Td>
                            <Td>4</Td>
                        </Tr>
                        <Tr>
                            <Td>AAVE</Td>
                            <Td>$41.263,00</Td>
                            <Td>+35%</Td>
                            <Td>4</Td>
                        </Tr>
                        <Tr>
                            <Td>AAVE</Td>
                            <Td>$41.263,00</Td>
                            <Td>+35%</Td>
                            <Td>4</Td>
                        </Tr>
                        <Tr>
                            <Td>AAVE</Td>
                            <Td>$41.263,00</Td>
                            <Td>+35%</Td>
                            <Td>4</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    )
}

