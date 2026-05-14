'use client'
import { Label, Slider } from '@heroui/react';
import React from 'react';

const PriceRange = () => {
    return (
        <Slider
      className="w-full max-w-xs"
      defaultValue={[100, 500]}
      formatOptions={{currency: "BDT", style: "currency"}}
      maxValue={10000}
      minValue={0}
      step={50}
    >
      <Label>Price Range</Label>
      <Slider.Output />
      <Slider.Track>
        {({state}) => (
          <>
            <Slider.Fill />
            {state.values.map((_, i) => (
              <Slider.Thumb key={i} index={i} />
            ))}
          </>
        )}
      </Slider.Track>
    </Slider>
    );
};

export default PriceRange;