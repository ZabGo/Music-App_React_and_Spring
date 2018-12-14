package com.example.MusicApp.Repositories.songs;

import com.example.MusicApp.models.Practice;
import com.example.MusicApp.models.Song;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class SongRepositoryImpl implements SongRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Song> findAllSongs(){
        List<Song> songs = null;

        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Song.class);
            songs = cr.list();


        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        return songs;
    }
    @Transactional
    public List<Song> findSongByName(String name){
        List<Song> songs = null;

        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Song.class);
            cr.add(Restrictions.ilike("title", name, MatchMode.ANYWHERE));
            songs = cr.list();


        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }




        return songs;
    }


}
