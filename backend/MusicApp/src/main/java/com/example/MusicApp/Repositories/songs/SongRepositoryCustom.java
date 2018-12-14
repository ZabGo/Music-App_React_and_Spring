package com.example.MusicApp.Repositories.songs;

import com.example.MusicApp.models.Song;

import java.util.List;

public interface SongRepositoryCustom {

    List<Song> findAllSongs();

    List<Song> findSongByName(String name);


}
