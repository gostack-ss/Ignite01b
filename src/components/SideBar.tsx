import { useState } from 'react'

import { Button } from './Button'
interface GenreProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreProps[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number
}
export function SideBar({ genres, selectedGenreId, handleClickButton }: SideBarProps) {




  return (
    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  )
}