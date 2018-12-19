package com.example.MusicApp.Repositories.songs;

import com.example.MusicApp.models.Song;
import com.example.MusicApp.projections.SongProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;



@RepositoryRestResource(excerptProjection = SongProjection.class)
public interface SongRepository extends JpaRepository<Song, Long>, SongRepositoryCustom {
}
