import DestinationCard from '@/components/destination-card/DestinationCard';
import PriceRange from '@/components/PriceRange';
import { Label, ListBox, Select } from '@heroui/react';
import React from 'react';

const DestinationsPage = async () => {
    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();

    return (
        <div className='p- container mx-auto py-20 space-y-10'>
            <div>
                <h2 className='text-6xl'>Explore All Destinations</h2>
                <p className='text-[#6C696D]'>Find your perfect travel experience from our curated collection</p>
            </div>

            <div className='space-y-1'>
                <div className='flex gap-1 p-4 justify-center items-center'>
                    <Select fullWidth placeholder="CATEGORY">
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="beach" textValue="Beach">
                                    Beach
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="mountain" textValue="Mountain">
                                    Mountain
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="city" textValue="City">
                                    City
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="adventure" textValue="Adventure">
                                    Adventure
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="cultural" textValue="Cultural">
                                    Cultural
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="luxury" textValue="Luxury">
                                    Luxury
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <PriceRange />

                    <Select fullWidth placeholder="SORT BY">
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="price" textValue="Price">
                                    Price
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="date" textValue="Date">
                                    Date
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="duration" textValue="Duration">
                                    Duration
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>
                <div>
                    <span className='text-[#6C696D]'>Showing {destinations.length} destinations</span>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-5 '>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;