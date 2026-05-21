'use client'
import React from 'react'
import { Button, Chip, Table } from '@heroui/react'
import Image from 'next/image'

import { redirect } from 'next/navigation'
import CancelAlert from '../CancelAlert/CancelAlert'

export default function BookingTable({ bookingData }) {


    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Room</Table.Column>
                            <Table.Column isRowHeader></Table.Column>
                            <Table.Column>Date</Table.Column>
                            <Table.Column>Time</Table.Column>
                            <Table.Column>Cost</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Action</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {
                                bookingData.map((book, ind) => {
                                    return <Table.Row key={ind}>
                                        <Table.Cell><Image src={book.image} height={100} width={100} alt={book.roomName} /></Table.Cell>
                                        <Table.Cell>{book.roomName}</Table.Cell>
                                        <Table.Cell>{book.date}</Table.Cell>
                                        <Table.Cell>{book.startTime} - {book.endTime}</Table.Cell>
                                        <Table.Cell>{book.totalCost}</Table.Cell>
                                        <Table.Cell>{book.status ?  <Chip color="danger">Cancelled</Chip> : <Chip color="success">Confirmed</Chip> }</Table.Cell>
                                        <Table.Cell>{book.status ? "" : <CancelAlert book={book}></CancelAlert>} </Table.Cell>
                                    </Table.Row>
                                })
                            }

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    )
}
