package com.example.wishlist

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val rItems=findViewById<RecyclerView>(R.id.recyclerView) as RecyclerView
        var items: MutableList<Item> =arrayListOf()
        val adapter=ItemAdapter(items)
        rItems.adapter=adapter
        rItems.layoutManager=LinearLayoutManager(this)
        val submitButton=findViewById<Button>(R.id.submitButton)
        submitButton.setOnClickListener {
            val itemName=findViewById<EditText>(R.id.inputItem)
            val itemLink=findViewById<EditText>(R.id.inputLink)
            val itemPrice=findViewById<EditText>(R.id.inputPrice)
            items.add(Item(itemName.text.toString(),itemLink.text.toString(),itemPrice.text.toString()))
            adapter.notifyDataSetChanged()
            itemName.setText("")
            itemLink.setText("")
            itemPrice.setText("")
        }



    }
}