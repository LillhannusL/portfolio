import React from 'react';
import './card.css';

export function Card({ className, children }) {
	return <div className={`card ${className}`}>{children}</div>;
}

export function CardContent({ className, children }) {
	return <div className={`card_content ${className}`}>{children}</div>;
}
