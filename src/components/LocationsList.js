import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react';

const items = [
    {
      header: 'Project Report - April',
      description:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
      meta: 'ROI: 30%',
    },
]

export default function LocationsList() {
    return (
    <Card.Group items={items} />
    )
}
