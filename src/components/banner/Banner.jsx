import React from 'react';
import { Button } from '../ui/button';
import { toast } from "sonner"

const Banner = () => {
  return (
    <div>
      <div className="flex">
        <div className="left uppercase font-bold text-4xl text-[#ae6fe9]">FlowMate's Mtto</div>
        <div className="right">


          <Button className='bg-orange-600' variant='default'>hello button</Button>

          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Show Toast
          </Button>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio atque, fugit nisi nemo vitae debitis? Alias recusandae beatae dolorum eius explicabo laboriosam porro repellat accusamus perferendis, amet id pariatur magnam nulla? Aperiam adipisci minima aliquam a, nesciunt architecto aut.</p>

          <h3>hello</h3>
          <p>ge4lo</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;