package com.example.MusicApp.Repositories.songs;

import com.example.MusicApp.models.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository extends JpaRepository<Song, Long>, SongRepositoryCustom {
}
