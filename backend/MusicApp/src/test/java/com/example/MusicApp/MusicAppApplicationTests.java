package com.example.MusicApp;

import com.example.MusicApp.Repositories.songs.SongRepository;
import com.example.MusicApp.models.Song;
import com.example.MusicApp.models.Task;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MusicAppApplicationTests {

	@Autowired
	SongRepository songRepository;

	@Test
	public void contextLoads() {
	}
//
//	@Test
//	public void canGetAllSongs(){
//		List<Song> allSongs = songRepository.findAllSongs();
//		assertEquals(4, allSongs.size());
//
//	}
//
//	@Test
//	public void canFindSongByName(){
//		List<Song> OneSongs = songRepository.findSongByName("blues");
//		assertEquals(1, OneSongs.size());
//		System.out.println(OneSongs);
//
//	}

//	@Test
//	public void canAddSongToTask(){
//		Task task4 = new Task("Improvisation", 25, "improvisation in Gm7");
//
//
//		Song song4 = new Song("Little Wing", "https://www.youtube.com/watch?v=An4uDegHB8s");
//
//
//		song4.setTask(task4);
//
//
//		task4.addSong(song4);
//
//		assertEquals(1, task4.getSongs().size());
//	}

}

