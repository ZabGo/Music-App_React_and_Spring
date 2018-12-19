package com.example.MusicApp.projections;

import com.example.MusicApp.models.Song;
import com.example.MusicApp.models.Task;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "SongProjection", types = Song.class)
public interface SongProjection {
    long getId();
    String getTitle();
    String getUrl();
    Task getTasks();
}
