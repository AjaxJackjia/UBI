package com.cityu.sandbox.api;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.cityu.sandbox.model.YouJiaBao;

@Path("/calculation")
public class Calculation {

	@POST
	@Path("/youjiabao")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public YouJiaBao getLoginInfo(YouJiaBao yjb) throws Exception
	{
		yjb.setYoujiabao("backend!");
		return yjb;
	}
}