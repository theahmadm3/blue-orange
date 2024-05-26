import { Avatar, Group, Text } from '@mantine/core';
import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material';

import { students } from '../data/students';
import { Link } from 'react-router-dom';

function Students() {
    const rows = students.map((student) => (
        <TableRow key={student.name}>
            <TableCell>
                <Group gap="sm">
                    <Avatar size={40} src={student.avatar} radius={40} />
                    <div>
                        <Text fz="sm" fw={500}>
                            {student.id === 1 ? student.name : (
                                <Link to={`student/${student.id}`} className='link black'>
                                    {student.name}
                                </Link>
                            )}
                        </Text>

                    </div>
                </Group>
            </TableCell>
            <TableCell>
                <Text fz="xs" c="dimmed">
                    {student.topic}
                </Text>
            </TableCell>
            <TableCell>
                <Text fz="sm">{student.email}</Text>
            </TableCell>
        </TableRow>
    ));

    return (
        <section id="students w-100 flex flex-column students-center justify-center">
            <h1 className="tc w-100 bg-white">Our Candidates</h1>
            <input
                type="search"
                className="mb3 outline-0 black bn pa2 pl3 pr3 br-pill shadow-1 bg-white w-80"
                placeholder="search"
            />
            <TableContainer sx={{ maxHeight: 400 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Research</TableCell>
                            <TableCell>Contact</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rows}</TableBody>
                </Table>
            </TableContainer>
        </section>
    );
}

export default Students;
