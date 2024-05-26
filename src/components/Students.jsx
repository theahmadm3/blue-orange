import { Avatar, Group, Text } from '@mantine/core';
import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material';

const data = [
    {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
        name: 'Robert Wolfkisser',
        job: 'Engineer',
        email: 'rob_wolf@gmail.com',
        rate: 22,
    },
    {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
        name: 'Jill Jailbreaker',
        job: 'Engineer',
        email: 'jj@breaker.com',
        rate: 45,
    },
    {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
        name: 'Henry Silkeater',
        job: 'Designer',
        email: 'henry@silkeater.io',
        rate: 76,
    },
    {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
        name: 'Bill Horsefighter',
        job: 'Designer',
        email: 'bhorsefighter@gmail.com',
        rate: 15,
    },
    {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        name: 'Jeremy Footviewer',
        job: 'Manager',
        email: 'jeremy@foot.dev',
        rate: 98,
    },
    {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        name: 'Jeremy Footviewer',
        job: 'Manager',
        email: 'jeremy@foot.dev',
        rate: 98,
    },
    {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        name: 'Jeremy Footviewer',
        job: 'Manager',
        email: 'jeremy@foot.dev',
        rate: 98,
    },
    {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        name: 'Jeremy Footviewer',
        job: 'Manager',
        email: 'jeremy@foot.dev',
        rate: 98,
    },
];

function Students() {
    const rows = data.map((item) => (
        <TableRow key={item.name}>
            <TableCell>
                <Group gap="sm">
                    <Avatar size={40} src={item.avatar} radius={40} />
                    <div>
                        <Text fz="sm" fw={500}>
                            {item.name}
                        </Text>
                        <Text c="dimmed" fz="xs">
                            {item.job}
                        </Text>
                    </div>
                </Group>
            </TableCell>
            <TableCell>
                <Text fz="sm">${item.rate.toFixed(1)} / hr</Text>
                <Text fz="xs" c="dimmed">
                    Rate
                </Text>
            </TableCell>
            <TableCell>
                <Text fz="sm">{item.email}</Text>
                <Text fz="xs" c="dimmed">
                    Email
                </Text>
            </TableCell>
        </TableRow>
    ));

    return (
        <section id="students">
            <h1 className="tc w-100 bg-white">Our Students</h1>
            <TableContainer sx={{ maxHeight: 400 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Research Topic</TableCell>
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
