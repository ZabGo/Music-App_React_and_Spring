package com.example.MusicApp.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="name")
    private String name;

    @Column(name = "content")
    private String content;

    @Column(name = "time")
    private int time;

    @OneToMany(mappedBy = "task", fetch = FetchType.LAZY)
    private List<Song> songs;

    @ManyToOne
    @JoinColumn(name = "session_id", nullable = false)
    private Session session;

    public Task(String name, int time, String content, Session session) {
        this.name = name;
        this.time = time;
        this.content = content;
        this.songs = songs;
        this.session = session;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<Song> getSongs() {
        return songs;
    }

    public void setSongs(List<Song> songs) {
        this.songs = songs;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }
}
