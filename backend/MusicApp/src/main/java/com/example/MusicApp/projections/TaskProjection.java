package com.example.MusicApp.projections;

//import com.example.MusicApp.models.Practice;
import com.example.MusicApp.models.Song;
import com.example.MusicApp.models.Task;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "TaskProjection", types = Task.class)
public interface TaskProjection {
    Long getId();
    String getName();
    String getContent();
    int getTime();
    List<Song> getSongs();
//    Practice getPractice();
}
