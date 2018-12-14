package com.example.MusicApp.components;

import com.example.MusicApp.Repositories.songs.SongRepository;
import com.example.MusicApp.models.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    SongRepository songRepository;

    public DataLoader(){}

    public void run(ApplicationArguments agrs){


        Song song1 = new Song("I Got The Same Old Blues", "https://www.youtube.com/watch?v=8JvyxKJToJs");
        songRepository.save(song1);

        Song song2 = new Song("Stone River", "https://www.youtube.com/watch?v=iFOzPY_ZF0c");
        songRepository.save(song2);

        Song song3 = new Song("Mannish Boy", "https://www.youtube.com/watch?v=bSfqNEvykv0");
        songRepository.save(song3);

        Song song4 = new Song("Little Wing", "https://www.youtube.com/watch?v=An4uDegHB8s");
        songRepository.save(song4);
    }
}
